//src/rol/permission.entity.ts

import { Rol } from './role.entity';


export class Permission {
    id: number;
    name: string;
    roles: Rol[];

}
    