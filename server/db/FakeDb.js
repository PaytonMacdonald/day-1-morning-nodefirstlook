import { generateId } from "../utils/GenerateId"

class FakeDb {
    burgers = [
        { bread: 'semi-seed', meat: 'medium-rare', sauce: 'mustard', pickles: true, cheese: true, id: generateId() },
        { bread: 'seedless', meat: 'well-done', sauce: 'BBQ', pickles: false, cheese: true, id: generateId() },
        { bread: 'whole-wheat', meat: 'rare', sauce: 'mayo', pickles: false, cheese: false, id: generateId() },
    ]
}

export const fakeDb = new FakeDb()