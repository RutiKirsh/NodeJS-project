import BaseController from './BaseController';
import service from '../services/HelpRequestService';


class HelpRequestController extends BaseController {
    constructor(service){
        super(service);
    }
}
export default new HelpRequestController(service);