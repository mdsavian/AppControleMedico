var WebcamUtil = /** @class */ (function () {
    function WebcamUtil() {
    }
    /**
     * Lists available videoInput devices
     * @returns a list of media device info.
     */
    WebcamUtil.getAvailableVideoInputs = function () {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return Promise.reject('enumerateDevices() not supported.');
        }
        return new Promise(function (resolve, reject) {
            navigator.mediaDevices.enumerateDevices()
                .then(function (devices) {
                resolve(devices.filter(function (device) { return device.kind === 'videoinput'; }));
            })
                .catch(function (err) {
                reject(err.message || err);
            });
        });
    };
    return WebcamUtil;
}());
export { WebcamUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViY2FtLnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtd2ViY2FtLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL3dlYmNhbS91dGlsL3dlYmNhbS51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUE7SUFxQkEsQ0FBQztJQW5CQzs7O09BR0c7SUFDVyxrQ0FBdUIsR0FBckM7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkUsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDNUQ7UUFFRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsU0FBUyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRTtpQkFDdEMsSUFBSSxDQUFDLFVBQUMsT0FBMEI7Z0JBQy9CLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBdUIsSUFBSyxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUE1QixDQUE0QixDQUFDLENBQUMsQ0FBQztZQUNyRixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztnQkFDUixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBXZWJjYW1VdGlsIHtcclxuXHJcbiAgLyoqXHJcbiAgICogTGlzdHMgYXZhaWxhYmxlIHZpZGVvSW5wdXQgZGV2aWNlc1xyXG4gICAqIEByZXR1cm5zIGEgbGlzdCBvZiBtZWRpYSBkZXZpY2UgaW5mby5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldEF2YWlsYWJsZVZpZGVvSW5wdXRzKCk6IFByb21pc2U8TWVkaWFEZXZpY2VJbmZvW10+IHtcclxuICAgIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyB8fCAhbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnZW51bWVyYXRlRGV2aWNlcygpIG5vdCBzdXBwb3J0ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKClcclxuICAgICAgICAudGhlbigoZGV2aWNlczogTWVkaWFEZXZpY2VJbmZvW10pID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGV2aWNlcy5maWx0ZXIoKGRldmljZTogTWVkaWFEZXZpY2VJbmZvKSA9PiBkZXZpY2Uua2luZCA9PT0gJ3ZpZGVvaW5wdXQnKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIHJlamVjdChlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==