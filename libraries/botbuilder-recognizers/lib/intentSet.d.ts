/**
 * @module botbuilder-recognizers
 */
/** second comment block */
/**
 * A named intent that represents an informed guess as to what the user is wanting to do based on
 * their last utterance.  Intents have a [score](#score) which is the calculated confidence of this
 * guess.
 */
export interface Intent<T = any> {
    /** Name of the intent. */
    name: string;
    /** Calculated confidence score. */
    score: number;
    /** (Optional) entities that were recognized as being related to this intent. */
    entities?: T;
}
export declare class IntentSet {
    private intents;
    readonly all: Intent[];
    top<T = any>(): Intent<T> | undefined;
}