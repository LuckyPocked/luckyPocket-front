interface IconProps {
  fill: string;
  alarm?: boolean;
  alarmClicked: boolean;
}

const AlarmIcon: React.FC<IconProps> = ({ fill, alarm, alarmClicked }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M19.2902 17.04L18.0002 15.75V10.75C18.0002 7.68 16.3602 5.11 13.5002 4.43V3.75C13.5002 2.92 12.8302 2.25 12.0002 2.25C11.1702 2.25 10.5002 2.92 10.5002 3.75V4.43C7.63017 5.11 6.00017 7.67 6.00017 10.75V15.75L4.71017 17.04C4.08017 17.67 4.52017 18.75 5.41017 18.75H18.5802C19.4802 18.75 19.9202 17.67 19.2902 17.04ZM16.0002 16.75H8.00017V10.75C8.00017 8.27 9.51017 6.25 12.0002 6.25C14.4902 6.25 16.0002 8.27 16.0002 10.75V16.75ZM12.0002 21.75C13.1002 21.75 14.0002 20.85 14.0002 19.75H10.0002C10.0002 20.85 10.8902 21.75 12.0002 21.75Z'
        fill={fill}
      />
      {alarmClicked && (
        <path d='M7 7.6087L12 5L17 7.6087V17H7V7.6087Z' fill='#1E1D1B' />
      )}
      {alarm && <circle cx='17' cy='6' r='2' fill='#DF454A' />}
    </svg>
  );
};

export default AlarmIcon;
