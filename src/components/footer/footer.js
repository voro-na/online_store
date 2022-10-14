import  styles from './footer.module.css'

const Footer = () => {
  return(
      <div className={styles.f}>
          <div className={styles.logo}>QPICK</div>
          <ul className={styles.list}>
              <li>Избранное</li>
              <li>Корзина</li>
              <li>Контакты</li>
          </ul>
          <div className={styles.terms}>
              <div>Условия сервиса</div>
              <div className={styles.lang}>
                  <div>lang</div>
                  <div>Рус</div>
                  <div>Eng</div>
              </div>
          </div>
          <div className={styles.href}>
              <a href='' className="link _icon-VK"></a>
              <a href='' className="link _icon-Telegram"></a>
              <a href='' className="link _icon-Whatsapp"></a>
          </div>

      </div>
  )
}
export default Footer