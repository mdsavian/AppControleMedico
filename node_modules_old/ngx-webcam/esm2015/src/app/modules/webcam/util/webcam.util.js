export class WebcamUtil {
    /**
     * Lists available videoInput devices
     * @returns a list of media device info.
     */
    static getAvailableVideoInputs() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return Promise.reject('enumerateDevices() not supported.');
        }
        return new Promise((resolve, reject) => {
            navigator.mediaDevices.enumerateDevices()
                .then((devices) => {
                resolve(devices.filter((device) => device.kind === 'videoinput'));
            })
                .catch(err => {
                reject(err.message || err);
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViY2FtLnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtd2ViY2FtLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL3dlYmNhbS91dGlsL3dlYmNhbS51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxVQUFVO0lBRXJCOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyx1QkFBdUI7UUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZFLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxTQUFTLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFO2lCQUN0QyxJQUFJLENBQUMsQ0FBQyxPQUEwQixFQUFFLEVBQUU7Z0JBQ25DLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3JGLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBXZWJjYW1VdGlsIHtcclxuXHJcbiAgLyoqXHJcbiAgICogTGlzdHMgYXZhaWxhYmxlIHZpZGVvSW5wdXQgZGV2aWNlc1xyXG4gICAqIEByZXR1cm5zIGEgbGlzdCBvZiBtZWRpYSBkZXZpY2UgaW5mby5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldEF2YWlsYWJsZVZpZGVvSW5wdXRzKCk6IFByb21pc2U8TWVkaWFEZXZpY2VJbmZvW10+IHtcclxuICAgIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyB8fCAhbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnZW51bWVyYXRlRGV2aWNlcygpIG5vdCBzdXBwb3J0ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKClcclxuICAgICAgICAudGhlbigoZGV2aWNlczogTWVkaWFEZXZpY2VJbmZvW10pID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGV2aWNlcy5maWx0ZXIoKGRldmljZTogTWVkaWFEZXZpY2VJbmZvKSA9PiBkZXZpY2Uua2luZCA9PT0gJ3ZpZGVvaW5wdXQnKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIHJlamVjdChlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==