function secondsToTime(seconds: number) {
  return new Date(1000 * seconds).toISOString();
}

export default secondsToTime;
