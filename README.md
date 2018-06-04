# wsindex v1.1.0

> :vertical_traffic_light: A static site generator for a simple link list.

wsindex is a static site generator which creates the index web page of the list of web pages.

# :cd: Install

Via npm:

    npm i -g wsindex

or, if you prefer local install:

    npm i wsindex

# Why is this necessary?

If one uses many many static site generators in a project and invokes them simultaneously, then it's a mess to open all of them. This tool works as the index of all the pages and works as the portal of your many many generated static sites.

# Usage

In package.json, define `wsindex` property:

package.json:

```json
{
  ...
  "wsindex": {
    "pages": [
      {
        "title": "The title of the page",
        "desc": "The description of the page",
        "serve": "The url when being served",
        "build": "The url when being built"
      },
      ...
    ]
  }
}
```

Then hit command `wsindex`:

    wsindex

This serves the single web page of the above link list.

Hit the command `wsindex build`:

    wsindex build

This outputs the html under the `build/` directory.

# Config

The port number of the server and output directory are configurable.

Full configurations are like the below:

```json
{
  "wsindex": {
    "port": 9000,
    "dest": "build",
    "pages": [
      "... list of object of links here ..."
    ]
  }
}
```

- `port` is the port of the server.
- `dest` is the destination directory when being built.
- `pages` are the list of link entities.

# License

MIT
