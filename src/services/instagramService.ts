import { ApiResponse } from "../types/api.type"
import { Post } from "../types/post.type"


const API_URL = './public/data.json'
const USER_IMAGE_URL = 'https://robohash.org/'

export const fetchInstagramData = async (): Promise<ApiResponse> => {
  const response = await fetch(API_URL)
  return await response.json()
}

export const getFeed = async (): Promise<Post[]> => {
  const response = await fetchInstagramData()
  return response.data ?? []
}

export const getPost = async (id: string): Promise<Post | null> => {
  const response = await fetchInstagramData()
  return response?.data?.find(post => post.id === id) ?? null
}

export const getPostsByUser = async (username: string): Promise<Post[]> => {
  const response = await fetchInstagramData()
  return response?.data?.filter(post => post.user.username === username) ?? []
}

export const getUserImage = (username: string): string => {
  return `${USER_IMAGE_URL}${username}`
}
export const getPostImage = (id: string): string => {
  return `${USER_IMAGE_URL}${id}`
}