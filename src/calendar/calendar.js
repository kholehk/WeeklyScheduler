import getMembers from '../utils/members';
import { getLinks } from '../utils/router';
import template from './calendar.html';

export default async function Calendar() {
    return {
        template,
        data: {
            tableHeader: ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri',],
            members: await getMembers(),
            links: { ...getLinks() },
        },
    }
}