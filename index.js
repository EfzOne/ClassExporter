var config = {
    row: {
        1: "physics",
        5: "chemistry",
        9: "geography",
        13: "physiology",
        17: "history",
        21: "politics"
    },
    col: {
        start: 2
    },
    "path": __dirname + "/data/data.csv"
};

var parse = require('csv-parse/lib/sync');
var fs = require('fs');
var _ = require("lodash");
var debug = require("debug")("exporter");

var data = parse(fs.readFileSync(config.path, {
    encoding: "utf-8"
}));

var dat_student = {};
var dat_class = {};

_(config.row).forEach((cls, col) => {
    _.tail(_.without(_.map(data, col), "")).forEach((number) => {
        var person = {
            "year": (Math.floor(number / 10000) % 10000),
            "class": (Math.floor(number / 100) % 100),
            "number": (number % 100)
        };
        if(person.year == 2018) {
            if(!(person.class in dat_student)) {
                dat_student[person.class] = {};
            }
            if(!(person.number in dat_student[person.class])) {
                dat_student[person.class][person.number] = [];
            }
            dat_student[person.class][person.number].push(cls);

            if(!(person.class in dat_class)) {
                dat_student[person.class] = {};
            }
            if(!(person.number in dat_student[person.class])) {
                dat_student[person.class][person.number] = [];
            }
            dat_student[person.class][person.number].push(cls);

        }
    });
});

debug(dat_student);

fs.writeFileSync('student.json', JSON.stringify(dat_student));
