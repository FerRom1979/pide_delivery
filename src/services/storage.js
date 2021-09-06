/* eslint-disable no-undef */

export const setLike = (id) => localStorage.setItem(id, id)

export const getLike = (id) => localStorage.getItem(id)

export const removeLike = (id) => localStorage.removeItem(id)

export const getID = (id) => localStorage.getItem(id)
