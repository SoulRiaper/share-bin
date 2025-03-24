

const NotFoundPage = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="error-container">
          <div className="error-icon">🔍</div>
          <h1 className="error-code text-muted">404</h1>
          <h2 className="error-title">Ой! Страница потерялась в космосе</h2>
          <p className="error-message">
            Похоже, мы не можем найти страницу, которую вы ищете.<br/>
            Возможно, она была перемещена или больше не существует.
          </p>
          <div className="error-actions">
            <a href="#/" className="btn btn-primary error-btn">На главную</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage;