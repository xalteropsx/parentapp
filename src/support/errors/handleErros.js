import {Notify} from 'quasar'

export const handleErros = (error) => {
  if (!error.response)
    if (error.hasOwnProperty('message')) notify(error.message)
    else notify('Connection failed, please try again later!')
  else if (error.response.hasOwnProperty('message')) notify(error.response.message)
  else if (error.response.hasOwnProperty('data')) {
    const errorData = error.response.data
    if (errorData && Array.isArray(errorData))
      errorData.forEach((error, index) => notify(error[error.keys(errorData)[index]]))
    else if (errorData) {
      const object = errorData[Object.keys(errorData)[0]]
      if (Array.isArray(object)) return object.forEach((error) => notify(error))
      const customError = customMessageByErrorType(error)
      if (customError) notify(customError)
      else notify(errorData[Object.keys(errorData)[0]])
    }
  } else notify('An unexpected error occurred, please try again later!')
}

const notify = (message) => {
  Notify.create({
    message: message,
    color: 'negative',
    textColor: 'white'
  })
}

const customMessageByErrorType = (error) => {
  const messages = {
    401: 'Unauthorized user! Check your login and password.',
    403: 'Access denied! This user does not have permission to access this resource!',
    404: 'Resource not found!',
    422: 'Validation failed!',
    500: 'An unexpected error occurred, please try again later!'
  }
  return messages[error.response.status]
}
