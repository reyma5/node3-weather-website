//------------ 43. HELLO EXPRESS -----------------//
// This is how to connect nodejs to the server and this example is opening the localhost:3000 (ex.: localhost:3000/weather)
// to run this code run: node src/app.js

// const { response } = require("express");
// const express = require("express");

// const app = express();

// app.get("", (req, res) => {
//   res.send("Hello express!");
// });

// app.get("/help", (req, res) => {
//   res.send("Help page");
// });

// app.get("/about", (req, res) => {
//   res.send("about page");
// });

// app.get("/weather", (req, res) => {
//   res.send("Today's weather");
// });

// app.listen(3000, () => {
//   console.log("Server is up on port 3000.");
// });

//--------- 44. SERVING UP HTML AND JSON ----------//

// const { response } = require("express");
// const express = require("express");

// const app = express();

// app.get("", (req, res) => {
//   res.send("<h1>Weather</h1>");
// });

// app.get("/help", (req, res) => {
//   res.send([
//     {
//       name: "Reyma",
//     },
//     {
//       name: "Sarah",
//     },
//   ]);
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About page</h1>");
// });

// app.get("/weather", (req, res) => {
//   res.send({
//     forecast: "rainy day",
//     location: "Philippines",
//   });
// });

// app.listen(3000, () => {
//   console.log("Server is up on port 3000.");
// });

//-------- 45. SERVING UP STATIC ASSETS --------//
/*
const path = require("path");
const express = require("express");

console.log(__dirname); //C:\Users\reyma.litdog\Desktop\NodeCourse.N\web-server\src
//console.log(__filename); //C:\Users\reyma.litdog\Desktop\NodeCourse.N\web-server\src\app.js
//console.log(path.join(__dirname, "..")); //C:\Users\reyma.litdog\Desktop\NodeCourse.N\web-server
//console.log(path.join(__dirname, "../..")); //C:\Users\reyma.litdog\Desktop\NodeCourse.N
console.log(path.join(__dirname, "../public")); //C:\Users\reyma.litdog\Desktop\NodeCourse.N\web-server/public

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath)); // way to customize your folder

app.get("/weather", (req, res) => {
  res.send({
    forecast: "rainy day",
    location: "Philippines",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
*/

//-------- 47. DYNAMIC PAGES WITH TEMPLATING ---------//
/*
const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs"); //setting up handlebars
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Andrew Mead",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Andrew Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Frequently asked questions (FAQs)",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "rainy day",
    location: "Philippines",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
*/

//----------- 48. CUSTOMIZING THE VIEWS DIRECTORY ------------//
/*
const path = require("path");
const express = require("express");

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../template"); //path for views that was changed to templates

//Setup handlebars engine and views location
app.set("view engine", "hbs"); //setting up handlebars
app.set("views", viewsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Andrew Mead",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Andrew Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Frequently asked questions (FAQs)",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "rainy day",
    location: "Philippines",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
*/

//--------- 49. ADVANCED TEMPLATING ----------------//
/*
const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs"); //setting up handlebars
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Andrew Mead",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Andrew Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Frequently asked questions (FAQs)",
    title: "Weather",
    name: "Andrew Mead",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "rainy day",
    location: "Philippines",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
*/

//--------------- 50. 404 PAGES ---------------------//
/*
const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs"); //setting up handlebars
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Andrew Mead",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Andrew Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    title2: "Frequently asked questions (FAQs)",
    name: "Andrew Mead",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "rainy day",
    location: "Philippines",
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("noMatch", {
    title: "404 Pages",
    name: "Andrew Mead",
    errorMessage: "Help article is not found",
  });
});

app.get("*", (req, res) => {
  res.render("noMatch", {
    title: "404 Pages",
    name: "Andrew Mead",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
*/
//----------- 54. QUERY STRINGS ---------//
/*
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs"); //setting up handlebars
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Andrew Mead",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Andrew Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    title2: "Frequently asked questions (FAQs)",
    name: "Andrew Mead",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!",
    });
  }

  geocode(req.query.address, (error, { latitude, longitude, location }) => {
    if (error) {
      return res.send({ error });
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        forecast: forecastData,
        location,
        address: req.query.address,
      });
    });
  });
});
app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("noMatch", {
    title: "404 Pages",
    name: "Andrew Mead",
    errorMessage: "Help article is not found",
  });
});

app.get("*", (req, res) => {
  res.render("noMatch", {
    title: "404 Pages",
    name: "Andrew Mead",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
*/

//---------- 56. ES6 ASIDE: DEFAULT FUNCTION PARAMETER -------------//
/*
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs"); //setting up handlebars
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Andrew Mead",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Andrew Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    title2: "Frequently asked questions (FAQs)",
    name: "Andrew Mead",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!",
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {     ///////////// 56
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});
app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("noMatch", {
    title: "404 Pages",
    name: "Andrew Mead",
    errorMessage: "Help article is not found",
  });
});

app.get("*", (req, res) => {
  res.render("noMatch", {
    title: "404 Pages",
    name: "Andrew Mead",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
*/

//----------- 58. CREATING A SEARCH FORM ----------//

const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs"); //setting up handlebars
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Andrew Mead",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Andrew Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    title2: "Frequently asked questions (FAQs)",
    name: "Andrew Mead",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!",
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});
app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("noMatch", {
    title: "404 Pages",
    name: "Andrew Mead",
    errorMessage: "Help article is not found",
  });
});

app.get("*", (req, res) => {
  res.render("noMatch", {
    title: "404 Pages",
    name: "Andrew Mead",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
