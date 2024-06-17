import BaseService from "./BaseService.js";
import repo from '../repositories/HelpRequestRepo.js';

class HelpRequestService extends BaseService {
    constructor(repo){
        super(repo);
    }
}
export default new HelpRequestService(repo);