

const NotFoundPage = () => {
  return (
    <div class="error-page">
      <div class="container">
        <div class="error-container">
          <div class="error-icon">🔍</div>
          <h1 class="error-code text-muted">404</h1>
          <h2 class="error-title">Ой! Страница потерялась в космосе</h2>
          <p class="error-message">
            Похоже, мы не можем найти страницу, которую вы ищете.<br/>
            Возможно, она была перемещена или больше не существует.
          </p>
          <div class="error-actions">
            <a href="#/" class="btn btn-primary error-btn">На главную</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage;