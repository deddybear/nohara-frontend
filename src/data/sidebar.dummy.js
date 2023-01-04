import DashboardIcon from '@mui/icons-material/Dashboard';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import PostAddIcon from '@mui/icons-material/PostAdd';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
    {
        name: 'Dashboard',
        link: '/dashboard',
        action: 'CHOOSE_DASHBOARD',
        icon: <DashboardIcon/>
    },
    {
        name: 'Caraousel',
        link: '/dashboard/caraousel',
        action: 'CHOOSE_CARAOUSEL',
        icon: <VideoSettingsIcon/>
    },
    {
        name: 'Layanan Kami',
        link: '/dashboard/layanan',
        action: 'CHOOSE_LAYANAN',
        icon: <PostAddIcon/>
    },
    {
        name: 'Protofolio',
        link: '/dashboard/protofolio',
        action: 'CHOOSE_PROTOFO',
        icon: <WebStoriesIcon/>
    },
    {
        name: 'About',
        link: '/dashboard/about',
        action: "CHOOSE_ABOUT",
        icon: <InfoIcon/>
    },
    {
        name: 'Edit Akun',
        link: '/dashboard/about',
        action: "CHOOSE_ABOUT",
        icon: <SettingsIcon/>
    }
];
