import { CardLimit } from '../../domain/usecases/cards-limit'

export class HandCardLimit implements CardLimit {
  readonly limit = 8
}
