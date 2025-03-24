

const NotFoundPage = () => {
  return (
    <div class="error-page">
      <div class="container">
        <div class="error-container">
          <div class="error-icon">🔍</div>
          <h1 class="error-code text-muted">404</h1>
          <h2 class="error-title">Страница не найдена</h2>
          <p class="error-message">
            Запрашиваемая страница не существует или была перемещена.
            <br/>Проверьте URL или вернитесь на главную.
          </p>
          <div class="error-actions">
            <a href="/" class="btn btn-primary error-btn">На главную</a>
            <a href="#" class="btn btn-outline-secondary error-btn">Назад</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage;