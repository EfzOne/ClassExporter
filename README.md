# Class Exporter

Export Student List to JSON Data.

## Data Example `data.csv`

| | Physics  | | | | Chemistry| | | | Geography| | | |Physiology| | | | History  | | | | Politics | | |
|-|----------|-|-|-|----------|-|-|-|----------|-|-|-|----------|-|-|-|----------|-|-|-|----------|-|-|
|.|..........|.|.|.|..........|.|.|.|..........|.|.|.|..........|.|.|.|..........|.|.|.|..........|.|.|
| | 20180101 | | | | 20180101 | | | | 20180101 | | | | 20180102 | | | | 20180102 | | | | 20180104 | | |
| | 20180101 | | | | 20180101 | | | | 20180101 | | | | 20180102 | | | | 20180102 | | | | 20180104 | | |

The first two rows should not contain student data. From the third row,
put students' id in specified columns if he or she select this course.

## Output

### `classes.json`

Statistics of classes data. How many students select a course in a class.

    {
        "1": {
            "chemistry": 33,
            ...
            "count": 47
        },
        ...
    }

### `courses.json`

Statistics of course data. Who select a course in a class.

    {
        "1": {
            "chemistry": [
                {"year": 2018,"class": 1,"number": 1},
                ...
            ]
        },
        ...
    }

### `students.json`

Statistics of student data. Which courses do a student select in a class.

    {
        "1": {
            "1": ["physics", "chemistry", "geography"],
            ...
        },
        ...
    }
