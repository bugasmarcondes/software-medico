"use strict";

exports.get =
  ("/",
  (req, res, next) => {
    res.status(200).send([
      {
        id: 1,
        name: "Nome 01",
      },
      {
        id: 2,
        name: "Nome 02",
      },
    ]);
  });

exports.post =
  ("/",
  (req, res, next) => {
    res.status(201).send(req.body);
  });

exports.put =
  ("/:id",
  (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
      id: id,
      item: req.body,
    });
  });

exports.delete =
  ("/",
  (req, res, next) => {
    res.status(200).send(req.body);
  });
