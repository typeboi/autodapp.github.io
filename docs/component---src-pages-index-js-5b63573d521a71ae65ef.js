;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    RXBc: function(e, t, a) {
      "use strict"
      a.r(t),
        a.d(t, "pageQuery", function() {
          return m
        })
      var n = a("5D9J"),
        l = a("q1tI"),
        r = a.n(l),
        o = a("Wbzz"),
        i = a("6Gk8"),
        c = a("Bl7J"),
        d = a("vrFN"),
        s = a("p3AD"),
        u = n.a.div({
          backgroundColor: "#fff",
          borderRadius: "0.5rem",
          overflow: "hidden",
          borderWidth: "1px",
        })
      t.default = function(e) {
        var t = e.data,
          a = e.location,
          n = t.site.siteMetadata.title,
          l = t.allMarkdownRemark.edges
        return r.a.createElement(
          c.a,
          { location: a, title: n },
          r.a.createElement(d.a, { title: "All posts" }),
          r.a.createElement(u, null),
          r.a.createElement(i.a, null),
          l.map(function(e) {
            var t = e.node,
              a = t.frontmatter.title || t.fields.slug
            return r.a.createElement(
              "article",
              { key: t.fields.slug },
              r.a.createElement(
                "header",
                null,
                r.a.createElement(
                  "h3",
                  { style: { marginBottom: Object(s.a)(0.25) } },
                  r.a.createElement(
                    o.Link,
                    { style: { boxShadow: "none" }, to: t.fields.slug },
                    a
                  )
                ),
                r.a.createElement("small", null, t.frontmatter.date)
              ),
              r.a.createElement(
                "section",
                null,
                r.a.createElement("p", {
                  dangerouslySetInnerHTML: {
                    __html: t.frontmatter.description || t.excerpt,
                  },
                })
              )
            )
          })
        )
      }
      var m = "2785444898"
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-5b63573d521a71ae65ef.js.map
