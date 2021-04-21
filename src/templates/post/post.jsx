import React from "react"
import parse from "html-react-parser"
import { Link } from "gatsby"
import * as styles from "./style.module.css"

const Post = ({ pageContext: { post } }) => {
  return (
    <article>
      <img
        className={styles.img}
        src={`https://content-eu-4.content-cms.com/859f2008-a40a-4b92-afd0-24bb44d10124${post.elements.img.url}`}
        alt={post.elements.img.altText}
        loading="lazy"
      />
      <div className="container">
        <h1 className={styles.header}>{post.name}</h1>
        <h3 className={styles.subheader}>
          <span>Would be great to have an author here</span>
          <small>{post.created}</small>
        </h3>
        <div className={styles.content}>{parse(post.elements.ft.value)}</div>
        <Link to="/">Go back</Link>
      </div>
    </article>
  )
}

export default Post