
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Phone,
  Mail,
} from "lucide-react";
import styles from "./Header.module.scss";

const services = [
  {
    label: "Gulvafslibning",
    href: "/ydelser/gulvafslibning",
  },
  {
    label: "Gulvafhøvling",
    href: "/ydelser/gulvafhovling",
  },
  {
    label: "Gulvbehandling",
    href: "/ydelser/gulvbehandling",
  },
  {
    label: "Trapper & træterrasser",
    href: "/ydelser/trapper-traeterrasser",
  },
  {
    label: "Øvrige ydelser",
    href: "/ydelser/ovrige-ydelser",
  },
];

const navigation = [
  { label: "Hjem", href: "/" },
  { label: "Vores arbejde", href: "/vores-arbejde" },
  { label: "Om os", href: "/om-os" },
  { label: "Områder", href: "/omrader" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.topBarLeft}>
            <a
              href="tel:+4552659452"
              className={styles.topBarItem}
            >
              <Phone size={15} />
              <span>+45 52 65 94 52</span>
            </a>

            <a
              href="mailto:info@bmgulvservice.dk"
              className={styles.topBarItem}
            >
              <Mail size={15} />
              <span>info@bmgulvservice.dk</span>
            </a>
          </div>

          <div className={styles.topBarRight}>
            <span>Professionel gulvservice</span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          {/* LOGO */}
          <a
            href="/"
            className={styles.logo}
            onClick={closeMobile}
            aria-label="BM Gulvservice - Forside"
          >
            <Image
              src="/logotip.png"
              alt="BM Gulvservice"
              width={460}
              height={140}
              priority
              className={styles.logoImage}
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className={styles.desktopNav}>
            <a href="/" className={styles.navLink}>
              Hjem
            </a>

            {/* YDELSER DROPDOWN */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`${styles.navLink} ${styles.dropdownTrigger}`}
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                <span>Ydelser</span>

                <ChevronDown
                  size={16}
                  className={
                    servicesOpen ? styles.chevronOpen : ""
                  }
                />
              </button>

              <div
                className={`${styles.dropdownMenu} ${
                  servicesOpen ? styles.dropdownMenuOpen : ""
                }`}
              >
                <div className={styles.dropdownHeader}>
                  <span>Vores ydelser</span>
                  <small>Professionelt håndværk</small>
                </div>

                {services.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className={styles.dropdownLink}
                    onClick={() => setServicesOpen(false)}
                  >
                    <span>{service.label}</span>
                    <ArrowUpRight size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* OTHER NAVIGATION */}
            {navigation.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.navLink}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="/kontakt" className={styles.cta}>
            <span>Få et gratis tilbud</span>
            <ArrowUpRight size={18} />
          </a>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className={styles.mobileButton}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Luk menu" : "Åbn menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${styles.mobileMenu} ${
          mobileOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          <a href="/" onClick={closeMobile}>
            Hjem
          </a>

          {/* MOBILE SERVICES */}
          <button
            type="button"
            className={styles.mobileServicesTrigger}
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-expanded={servicesOpen}
          >
            <span>Ydelser</span>

            <ChevronDown
              size={18}
              className={
                servicesOpen ? styles.chevronOpen : ""
              }
            />
          </button>

          <div
            className={`${styles.mobileServices} ${
              servicesOpen ? styles.mobileServicesOpen : ""
            }`}
          >
            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                onClick={closeMobile}
              >
                {service.label}
              </a>
            ))}
          </div>

          {/* OTHER NAVIGATION */}
          {navigation.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMobile}
            >
              {item.label}
            </a>
          ))}

          {/* MOBILE CTA */}
          <a
            href="/kontakt"
            className={styles.mobileCta}
            onClick={closeMobile}
          >
            Få et gratis tilbud
            <ArrowUpRight size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
