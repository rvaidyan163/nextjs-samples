import ActiveLink from './ActiveLink'

const Nav = () => (
  <nav>
    <style jsx>{`
      .nav-link {
        text-decoration: none;
      }

      .active:after {
        content: ' (current page)';
      }
    `}</style>
    <ul className="nav">
      {["Home", "Page-1", "Page-2"].map((page) => {
        const pageRoute = "/" + page;
        return (<li>
          <ActiveLink activeClassName="active" href="/[slug]" as={pageRoute}>
            <a className="nav-link">{page}</a>
          </ActiveLink>
        </li>)
      }
      )}
      <li>
        <ActiveLink activeClassName="active" href="/styledPage">
          <a className="nav-link">Styled page</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/blogPost">
          <a className="nav-link">Blog post (SSG)</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/about">
          <a className="nav-link">About</a>
        </ActiveLink>
      </li>
      {/* 
      <li>
        <ActiveLink activeClassName="active" href="/about">
          <a className="nav-link">About</a>
        </ActiveLink>
      </li> */}
      {/* <li>
        <ActiveLink activeClassName="active" href="/pageWithLayout">
          <a className="nav-link">A simple page with Layout</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/pageWithLayoutAndStyle">
          <a className="nav-link">Layout with Styled page</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/blogPost">
          <a className="nav-link">Layout with Blog post (SSG)</a>
        </ActiveLink>
      </li> */}

    </ul>
  </nav>
)

export default Nav
