import { Phone, ExternalLink } from 'lucide-react'
import { siteConfig } from '../../../config/siteConfig'
import { getAssetPath } from '../../../shared/utils/assetPath'
import { Container } from '../../../shared/components/Container'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()
  const phoneHref = siteConfig.phoneHref
    || `tel:${siteConfig.phoneDisplay.replace(/\s/g, '')}`

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Red top line */}
      <div className={styles.topLine} aria-hidden="true" />

      <Container>
        <div className={styles.inner}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#accueil" className={styles.logoLink} aria-label="Dream Gym — Haut de page">
              <img
                src={getAssetPath(siteConfig.assets.logo)}
                alt={siteConfig.name}
                className={styles.logo}
                width={48}
                height={48}
              />
            </a>
            <p className={styles.slogan}>{siteConfig.slogan}</p>
            <p className={styles.official}>Site officiel de Dream Gym</p>
          </div>

          {/* Nav links */}
          <nav aria-label="Liens du footer">
            <ul className={styles.navList} role="list">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className={styles.contact}>
            <a href={phoneHref} className={styles.contactLink}>
              <Phone size={14} aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <ExternalLink size={14} aria-hidden="true" />
              Dream Gym sur Facebook
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  )
}
