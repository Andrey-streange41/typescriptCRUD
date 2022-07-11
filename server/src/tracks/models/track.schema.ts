import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import  { Document } from 'mongoose';

export type TrackDocument = Track & Document;

@Schema()
export class Track {

  @Prop()
  name: string;

  @Prop()
  artlist: string;

  @Prop()
  text: string;

  @Prop()
  listens: number;

  @Prop()
  picture: string;

  @Prop()
  audio: string;

  @Prop({type:[{type:mongoose.Schema.Types.ObjectId, ref:'Comment'}]})
  comments: Comment[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);
