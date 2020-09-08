import { Driver, DriverDto } from '../models/driver.model';
import { SQLite, SQLiteObject, SQLiteOriginal } from '@ionic-native/sqlite';
/**
 * @class Service
 *
 * Manages the data of the application.
 */

export class UserService {
    public drivers: Driver[];
    public driversDto: DriverDto[];
    //DTOs werden als Models gespeichert
    constructor() {
        this.driversDto = this.loadDrivers() || [];
        this.drivers = this.driversDto.map(driver => new Driver(driver));
    }

    loadDrivers(): DriverDto[] {
        SQLite.create({ name: 'ftAppMobile.db', location: 'default' }).then((dbLite: SQLiteObject) => {
            try {
                dbLite.executeSql('SELECT * FROM drivers;', []).then(data => {
                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            this.driversDto.push({
                                id: data.rows.item(i).id,
                                firstname: data.rows.item(i).Vorname,
                                lastname: data.rows.item(i).Nachname
                            });
                        }
                    }
                    return this.driversDto;
                });
            } catch (error) {
                alert(error)
            }
        })
        return this.driversDto
    }
}