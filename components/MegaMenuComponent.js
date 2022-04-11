import TransparentButton from "@/components/TransparentButton";
import styles from "@/styles/components/MegaMenuComponent.module.css";
import Image from "next/image";
import Link from "next/link";
import { Nav, Navbar, Dropdown } from "react-bootstrap";

function MegaMenuComponent({ children }) {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.NavBar}>
          <div className={styles.NavBarImage}>
            <Link href="/">
              <Image
                src="/assets/ultroneous-image.svg"
                alt="ultroneous-image"
                className="navbar-brand-images"
                width={200}
                height={50}
              />
            </Link>
          </div>
          <div>
            <Navbar id="basic-navbar-nav" className={styles.NavbarItems}>
              <Nav>
                <Nav.Link
                  className={styles.NavSingleItem}
                  style={{ margin: "0 1em" }}
                >
                  <Link href="/about-ultroneous">About us</Link>
                </Nav.Link>
                <div>
                  <Nav.Link
                    className={styles.NavSingleItem}
                    style={{ margin: "0 1em" }}
                  >
                    <Link href="/services">Services</Link>
                  </Nav.Link>
                </div>
                <Nav.Link
                  className={styles.NavSingleItem}
                  style={{ margin: "0 1em" }}
                >
                  <Link href="/careers">Career</Link>
                </Nav.Link>
                <div className={styles.ContactUsButton}>
                  <TransparentButton val={"Contact Us"} link={"/contact-us"} />
                </div>
              </Nav>
            </Navbar>
          </div>
        </div>
        <input type="checkbox" id="myInput" className={styles.Checkbox} />
        <label htmlFor="myInput" className={styles.Label}>
          <span class={`${styles.bar} ${styles.top}`}></span>
          <span class={`${styles.bar} ${styles.middle}`}></span>
          <span class={`${styles.bar} ${styles.bottom}`}></span>
        </label>
        <aside className={styles.AsideMain}>
          <div class={`${styles.asidesection} ${styles.asideleft}`}>
            <div class={styles.asidecontent}>
              <p> Some text that will make you click the cta </p>
              <button class={styles.button}> CTA </button>
            </div>
          </div>
          <div class={`${styles.asidesection} ${styles.asideright}`}>
            <ul class={styles.asidelist}>
              {/* <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">Company</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <li className={styles.ListItems}>
                      <Link href={"/careers"}>
                        <a className={styles.asideanchor}>Careers </a>
                      </Link>
                    </li>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <li className={styles.ListItems}>
                      <Link href={"/careers"}>
                        <a className={styles.asideanchor}>Careers </a>
                      </Link>
                    </li>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <li className={styles.ListItems}>
                      <Link href={"/careers"}>
                        <a className={styles.asideanchor}>Careers </a>
                      </Link>
                    </li>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}

              <li className={styles.ListItems}>
                <Link href={"/contact-us"}>
                  <a className={styles.asideanchor}>Contact Us </a>
                </Link>
              </li>
              <li className={styles.ListItems}>
                <Link href={"/services"}>
                  <a className={styles.asideanchor}>Services </a>
                </Link>
              </li>
              <li className={styles.ListItems}>
                <a href="" class={styles.asideanchor}>
                  Link
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {children}
    </main>
  );
}

export default MegaMenuComponent;
