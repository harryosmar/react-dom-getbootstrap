import _ from 'lodash';

const secondsToTime = (seconds) => {
    const hours = _.floor(seconds / 3600);
    seconds = seconds % 3600;
    const hoursString = hours > 0 ? `${hours}:` : '';

    const minutes = _.floor(seconds / 60);
    const minutesString = hours > 0 || minutes > 0 ? `${minutes}:` : '';
    seconds = seconds % 60;

    return `${hoursString}${minutesString}${seconds}`;
};

export {secondsToTime};