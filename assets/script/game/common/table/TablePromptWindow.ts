
import { JsonUtil } from "../../../core/utils/JsonUtil";

export class TablePromptWindow {
    static TableName: string = "PromptWindow";

    private data: any;

    init(id: number, id1: number, id2: number) {
        var table = JsonUtil.get(TablePromptWindow.TableName);
        this.data = table[id][id1][id2];
        this.id = id;
    }

    id: number = 0;

    get title(): string {
        return this.data.title;
    }
    get describe(): string {
        return this.data.describe;
    }
    get array(): any {
        return this.data.array;
    }
    get hp(): number {
        return this.data.hp;
    }
}
    