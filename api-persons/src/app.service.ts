import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    const urlRequest = `${process.env.URL_API_MANAGER}`;
    const result = await axios.get(`${urlRequest}`);
    console.log(`result => `, result.data);
    return result;
  }
}
