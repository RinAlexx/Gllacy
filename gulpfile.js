import gulp from 'gulp';
import browser from 'browser-sync';

export const server = (done) => {
    browser.init({
        server: {
            baseDir: './'
        },
        cors: true,
        notify: false,
        ui: false,
    });
    done();
}

export const watcher = () => {
    gulp.watch('styles/*.css').on('change', browser.reload);
    gulp.watch('*.html').on('change', browser.reload);
}

export default gulp.series(
    server, watcher
);
