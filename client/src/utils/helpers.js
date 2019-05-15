export default {

    // true => false
    boolFlip: (arg) => {
        return !arg;
    },

    // used to hide panel and change corresponding button aesthetics
    minUpdate:(cn) => {
        if(cn === 'minimizer-btn-open') {
            return 'minimizer-btn';
        } 
        return 'minimizer-btn-open';
    },

    // hides/shows start menu 
    toggleStartVisibility: (arg) => {
        const sm = document.getElementById('start-menu');
        arg ? sm.className += ' invisible' : sm.className -= ' invisible';
    }
}