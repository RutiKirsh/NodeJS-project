import BaseService from "./BaseService.js";

class HelpRequest extends BaseService {
    constructor(repo){
        super(repo);
    }
}
export default new HelpRequest(repo);