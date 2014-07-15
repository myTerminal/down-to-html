module.exports = function (grunt) {
    grunt.initConfig({
	pkg: grunt.file.readJSON("package.json"),
	markdown: {
	    all: {
		files: [
		    {
			expand: true,
			src: "src/*.md",
			dest: "output/",
			ext: ".html"
		    }
		]
	    }
	},
	watch: {
	    all: {
		files: "src/*.md",
		tasks: ["markdown"]
	    }
	}
    });

    grunt.loadNpmTasks("grunt-markdown");
    grunt.loadNpmTasks("grunt-contrib-watch");
    
    grunt.registerTask("default", ["markdown"]);
    grunt.registerTask("start", ["watch"]);
};
