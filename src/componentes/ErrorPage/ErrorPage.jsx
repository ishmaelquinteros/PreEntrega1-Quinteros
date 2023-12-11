const ErrorPage = ({error}) => {
    const errorrecibed = error
    return (
    <div>
        <h2>ERROR {errorrecibed}</h2>
    </div>
  )
}

export default ErrorPage