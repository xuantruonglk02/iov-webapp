import moment from 'moment';
import 'moment-timezone';

declare module 'moment' {
    interface Moment {
        /**
         * @param fm format
         * @return string
         */
        formatFromUtc(fm: string): string;
    }
}

moment.fn.formatFromUtc = function (fm: string): string {
    return this.tz('UTC').format(fm);
};

export default moment;

export const formatDuration = (duration: number): string => {
    const seconds = moment.duration(duration, 'seconds');
    const hours = seconds.hours();
    const minutes = seconds.minutes();
    let formattedTime = '';
    if (hours > 0) {
        formattedTime += `${hours}h`;
    }
    if (minutes > 0) {
        formattedTime += `${minutes}m`;
    }
    return formattedTime || '0m';
};
