import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Campus } from '../campus/campus.model';

@Table
export class Servidor extends Model {
  @Column
  id_ser: number;

  @Column
  nome_ser: string;

  @Column
  cpf_ser: string;

  @Column
  siape_ser: number;

  @ForeignKey(() => Campus)
  @Column
  id_cam_fk: number;
}