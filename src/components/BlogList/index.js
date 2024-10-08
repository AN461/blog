import {Component} from 'react'
import Loader from 'react-loader-spinner'
import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'
import UserInfo from '../UserInfo'

import './index.css'

class BlogList extends Component {
  state = {
    isLoading: false,
    blogsData: [],
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(response)
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div>
        <UserInfo />
        <div className="blogList-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            blogsData.map(eachBlog => (
              <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}
export default BlogList
