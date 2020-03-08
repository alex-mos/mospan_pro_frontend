import Vue from 'vue'

type CSSClass = (string | false | {
	[key: string]: string
})

export class VueComponent<P = {}> extends Vue {
	// @ts-ignore
	public $props: P & {
		key?: string | number
		class?: CSSClass | CSSClass[]
		click?: (e: Event) => void
	}
}

export { VNode } from 'vue'
export { Component, Prop, Watch, Emit } from 'vue-property-decorator'
