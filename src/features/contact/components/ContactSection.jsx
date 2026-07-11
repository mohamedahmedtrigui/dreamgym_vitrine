import { Phone, ExternalLink, MessageCircle, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '../../../config/siteConfig'
import { GlowButton } from '../../../shared/components/GlowButton'
import { AnimatedSection } from '../../../shared/components/AnimatedSection'
import { Container } from '../../../shared/components/Container'
import styles from './ContactSection.module.css'

export function ContactSection() {
  const phoneHref = siteConfig.phoneHref
    || `tel:${siteConfig.phoneDisplay.replace(/\s/g, '')}`

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <Container>
        <AnimatedSection>
          <div className={styles.meta}>
            <span className={styles.metaNum}>05</span>
            <span className={styles.metaLabel}>Contact</span>
          </div>
          <h2 id="contact-heading" className={styles.heading}>
            VENEZ NOUS
            <br />
            <span className={styles.headingAccent}>RETROUVER</span>
          </h2>
        </AnimatedSection>

        <div className={styles.layout}>
          {/* Contact info */}
          <AnimatedSection delay={0.1} className={styles.infoCol}>
            <div className={styles.infoBlock}>
              <h3 className={styles.gymName}>{siteConfig.name}</h3>
              <p className={styles.gymDesc}>{siteConfig.sloganFr}</p>
            </div>

            <div className={styles.contactItems}>
              {/* Phone */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon} aria-hidden="true">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className={styles.contactLabel}>Téléphone</span>
                  <a href={phoneHref} className={styles.contactValue}>
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon} aria-hidden="true">
                  <ExternalLink size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className={styles.contactLabel}>Facebook</span>
                  <a
                    href={siteConfig.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactValue}
                  >
                    Dream Gym
                  </a>
                </div>
              </div>

              {/* Address placeholder */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon} aria-hidden="true">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className={styles.contactLabel}>Adresse</span>
                  <span className={styles.contactValueMuted}>
                    Contactez la salle pour connaître l'adresse exacte.
                  </span>
                </div>
              </div>

              {/* Hours placeholder */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon} aria-hidden="true">
                  <Clock size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className={styles.contactLabel}>Horaires</span>
                  <span className={styles.contactValueMuted}>
                    Contactez la salle pour connaître les horaires et les disponibilités.
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Action buttons */}
          <AnimatedSection delay={0.2} className={styles.actionsCol}>
            <div className={styles.actionCard}>
              <h3 className={styles.actionTitle}>Nous contacter</h3>
              <p className={styles.actionDesc}>
                Pour toute question sur les activités, les modalités ou les disponibilités,
                n'hésitez pas à nous appeler ou à nous écrire sur Facebook.
              </p>

              <div className={styles.actionButtons}>
                <GlowButton href={phoneHref} variant="primary">
                  <Phone size={16} aria-hidden="true" />
                  Appeler
                </GlowButton>
                <GlowButton
                  href={siteConfig.facebookUrl}
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Facebook
                </GlowButton>
                <GlowButton
                  href={siteConfig.facebookUrl}
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contacter via Messenger"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Messenger
                </GlowButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
