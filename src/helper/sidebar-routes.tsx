

import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import TvIcon from '@heroicons/react/24/outline/TvIcon';
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon';
import FilmIcon from '@heroicons/react/24/outline/FilmIcon';
import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon';
import NewspaperIcon from '@heroicons/react/24/outline/NewspaperIcon';
import TrophyIcon from '@heroicons/react/24/outline/TrophyIcon';
import GlobeAltIcon from '@heroicons/react/24/outline/GlobeAltIcon';
import ShieldCheckIcon from '@heroicons/react/24/outline/ShieldCheckIcon';
import { SidebarMenuObj } from './types';

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;



const routes: SidebarMenuObj[] = [
    {
        path: '/dashboard',
        icon: <Squares2X2Icon className={iconClasses} />,
        pageName: 'Dashboard',
        pageTitle: 'Dashboard',
    },
    {
        path: '/livefootball',
        icon: <TvIcon className={iconClasses} />,
        pageName: 'Live Football',
        pageTitle : "Live Football"
    },
    
    {
        path: '/highlights',
        icon: <FilmIcon className={iconClasses} />,
        pageName: 'Highlights',
        pageTitle: 'Highlights',
    },
    {
        path: '/shop',
        icon: <ShoppingBagIcon className={iconClasses} />,
        pageName: 'Shop',
        pageTitle: 'Shop',
    },
    {
        path: '/standing',
        icon: <ChartBarIcon className={iconClasses} />,
        pageName: 'Standing',
        pageTitle: 'Standing',
    },
    {
        path: '/news',
        icon: <NewspaperIcon className={iconClasses} />,
        pageName: 'News',
        pageTitle: 'News',
    },
    {
        path: '/footballleague',
        icon: <TrophyIcon className={`${iconClasses} inline`} />,
        pageName: 'Football League',
        pageTitle : "",
        submenu: [
            {
                path: '/footballleague/worldcup',
                icon: <GlobeAltIcon className={submenuIconClasses} />,
                pageName: 'Worldcup Qatar 2022',
                pageTitle : "Worldcup Qatar 2022",
            },
            {
                path: '/footballleague/champions',
                icon: <ShieldCheckIcon className={submenuIconClasses} />,
                pageName: 'Champions League',
                pageTitle : "Champions League",
            }
        ],
    },
];

export default routes;
