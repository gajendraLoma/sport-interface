import moment from 'moment';

interface CalendarEvent {
    title: string;
    theme: string;
    startTime: moment.Moment;
    endTime: moment.Moment;
}

interface RecentTransaction {
    name: string;
    avatar: string;
    email: string;
    location: string;
    amount: number;
    date: moment.Moment;
}

export interface Match {
    matchNo: string;
    scheduledDate: string;
    teams: string;
    score: string;
    status: string;
    resultDate: string;
}

export interface TeamMember {
    name: string;
    avatar: string;
    email: string;
    role: string;
    joinedOn: string;
    lastActive: string;
}

interface DummyDataObj {
    CALENDAR_INITIAL_EVENTS: CalendarEvent[];
    RECENT_TRANSACTIONS: RecentTransaction[];
    TEAM_MEMBERS_LIST : TeamMember[];
    MATCHES : Match[];
}

const DummyData: DummyDataObj = Object.freeze({
    CALENDAR_INITIAL_EVENTS: [
        { title: "Practice Match", theme: "GREEN", startTime: moment().add(-12, 'd').startOf('day'), endTime: moment().add(-12, 'd').endOf('day') },
        { title: "Team Meeting", theme: "PINK", startTime: moment().add(-8, 'd').startOf('day'), endTime: moment().add(-8, 'd').endOf('day') },
        { title: "Strategy Session", theme: "PURPLE", startTime: moment().add(-2, 'd').startOf('day'), endTime: moment().add(-2, 'd').endOf('day') },
        { title: "Coach Briefing", theme: "BLUE", startTime: moment().startOf('day'), endTime: moment().endOf('day') }, 
    ],

    RECENT_TRANSACTIONS: [
        { name: "Alex", avatar: "https://reqres.in/img/faces/1-image.jpg", email: "alex@dashwind.com", location: "Paris", amount: 100, date: moment().endOf('day') },
        { name: "Ereena", avatar: "https://reqres.in/img/faces/2-image.jpg", email: "ereena@dashwind.com", location: "London", amount: 190, date: moment().add(-1, 'd').endOf('day') },
        { name: "John", avatar: "https://reqres.in/img/faces/3-image.jpg", email: "jhon@dashwind.com", location: "Canada", amount: 112, date: moment().add(-1, 'd').endOf('day') },
        { name: "Matrix", avatar: "https://reqres.in/img/faces/4-image.jpg", email: "matrix@dashwind.com", location: "Peru", amount: 111, date: moment().add(-1, 'd').endOf('day') },
    ]
    ,

    TEAM_MEMBERS_LIST : [
        { name: "Alex", avatar: "https://reqres.in/img/faces/1-image.jpg", email: "alex@dashwind.com", role: "Captain", joinedOn: moment(new Date()).add(-5 * 1, 'days').format("DD MMM YYYY"), lastActive: "5 hr ago" },
        { name: "Ereena", avatar: "https://reqres.in/img/faces/2-image.jpg", email: "ereena@dashwind.com", role: "Striker", joinedOn: moment(new Date()).add(-5 * 2, 'days').format("DD MMM YYYY"), lastActive: "15 min ago" },
        { name: "John", avatar: "https://reqres.in/img/faces/3-image.jpg", email: "jhon@dashwind.com", role: "Defender", joinedOn: moment(new Date()).add(-5 * 3, 'days').format("DD MMM YYYY"), lastActive: "20 hr ago" },
        { name: "Matrix", avatar: "https://reqres.in/img/faces/4-image.jpg", email: "matrix@dashwind.com", role: "Goalkeeper", joinedOn: moment(new Date()).add(-5 * 4, 'days').format("DD MMM YYYY"), lastActive: "1 hr ago" },
        { name: "Virat", avatar: "https://reqres.in/img/faces/5-image.jpg", email: "virat@dashwind.com", role: "Midfielder", joinedOn: moment(new Date()).add(-5 * 5, 'days').format("DD MMM YYYY"), lastActive: "40 min ago" },
        { name: "Miya", avatar: "https://reqres.in/img/faces/6-image.jpg", email: "miya@dashwind.com", role: "Coach", joinedOn: moment(new Date()).add(-5 * 7, 'days').format("DD MMM YYYY"), lastActive: "5 hr ago" },
    ],

    MATCHES : [
        { matchNo: "#001", scheduledDate: moment(new Date()).add(-30 * 1, 'days').format("DD MMM YYYY"), teams: "Team A vs Team B", score: "3-2", status: "Won", resultDate: moment(new Date()).add(-30 * 1, 'days').format("DD MMM YYYY") },
        { matchNo: "#002", scheduledDate: moment(new Date()).add(-30 * 2, 'days').format("DD MMM YYYY"), teams: "Team C vs Team D", score: "1-1", status: "Draw", resultDate: moment(new Date()).add(-30 * 2, 'days').format("DD MMM YYYY") },
        { matchNo: "#003", scheduledDate: moment(new Date()).add(-30 * 3, 'days').format("DD MMM YYYY"), teams: "Team E vs Team F", score: "-", status: "Upcoming", resultDate: "-" },
        { matchNo: "#004", scheduledDate: moment(new Date()).add(-30 * 4, 'days').format("DD MMM YYYY"), teams: "Team G vs Team H", score: "-", status: "Upcoming", resultDate: "-" },
    ]
    
});

export default DummyData;
