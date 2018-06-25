const getSleepHours = (day) => {
	day = day.toLowerCase();
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 6;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 6;
  } else if (day === 'saturday') {
    return 10;
  } else {
    return 9;
  }
};

const getActualSleepHours = () => {
  let monday = getSleepHours('monday');
  let tuesday = getSleepHours('tuesday');
  let wednesday = getSleepHours('wednesday');
  let thursday = getSleepHours('thursday');
  let friday = getSleepHours('friday');
  let saturday = getSleepHours('saturday');
  let sunday = getSleepHours('sunday');
  return monday + tuesday + wednesday + thursday + friday + saturday + sunday
};

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let sleepTimeDifference = actualSleepHours - idealSleepHours;

  if (actualSleepHours > idealSleepHours) {
    console.log(`You got more sleep than needed by ${sleepTimeDifference}. Great job!`)
  } else if (actualSleepHours < idealSleepHours) {
    sleepTimeDifference *= -1;
    console.log(`Get more sleep, dummy! You need to sleep ${sleepTimeDifference} more hours!`)
  } else {
    console.log("You got the perfect amount of sleep!")
  }
};

calculateSleepDebt();
