const express = require("express");
const cors = require("cors");

const app = express();

let currentUser;

const corsOptions = {
  orgim: "/",
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());

app.listen(3333, () => {
  console.log("Server on port 3333");
});

app.route("/api/course").get((req, res) => {
  res.send(COURSES);
});

app.route("/api/course/:id").get((req, res) => {
  const courseId = +req.params["id"];

  res.send(COURSES.find(course => course.id === courseId));
});

app.route("/api/course").post((req, res) => {
  const data = req.body;

  const firstId = COURSE ? Math.max.apply(null, COURSES.map(course => course.id)) + 1 : 1;
  data.id = firstId;

  COURSES.push(data);

  res.status(201).send(data);
});

app.route("/api/course/:id").put((req, res) => {
  const courseId = +req.params["id"];
  const data = req.body;

  const index = COURSES.findIndex(course => course.id === courseId);
  COURSES[index] = data;

  res.send(data);
});

app.route("/api/course/:id").delete((req, res) => {
  const courseId = +req.params["id"];

  COURSES = COURSES.filter(course => course.id !== courseId);

  res.status(204).send({});
});

let COURSES = [
  {
      id: 1,
      name: 'Angular: CLI',
      releaseDate: 'November 2, 2019',
      description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
      duration: 120,
      code: 'XLF-1212',
      rating: 3,
      price: 12.99,
      imageUrl: '/assets/images/cli.png',
  },
  {
      id: 2,
      name: 'Angular: Forms',
      releaseDate: 'November 4, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
      duration: 80,
      code: 'DWQ-3412',
      rating: 3.5,
      price: 24.99,
      imageUrl: '/assets/images/forms.png',
  },
  {
      id: 3,
      name: 'Angular: HTTP',
      releaseDate: 'November 8, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
      duration: 80,
      code: 'QPL-0913',
      rating: 4.0,
      price: 36.99,
      imageUrl: '/assets/images/http.png',
  },
  {
      id: 4,
      name: 'Angular: Router',
      releaseDate: 'November 16, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
      duration: 80,
      code: 'OHP-1095',
      rating: 4.5,
      price: 46.99,
      imageUrl: '/assets/images/router.png',
  },
  {
      id: 5,
      name: 'Angular: Animations',
      releaseDate: 'November 25, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
      duration: 80,
      code: 'PWY-9381',
      rating: 5,
      price: 56.99,
      imageUrl: '/assets/images/animations.png',
  }
];
