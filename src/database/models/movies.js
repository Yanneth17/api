function moviesData (sequelize, Datatypes) {

    cols = {
        id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        title: {type:Datatypes.STRING},
        description: {type: Datatypes.STRING},
        year:{type: Datatypes.INTEGER},
    };

    config = {camelCase:false, timestamps: false};

    const movies = sequelize.define( 'movies', cols, config);
    
    return movies;
};

module.exports = moviesData;