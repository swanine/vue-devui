import { defineComponent, computed, ref, watch, nextTick, onMounted, toRefs } from 'vue';
import { inputProps, InputType } from './use-input';
import './input.scss'

export default defineComponent({
  name: 'DInput',
  directives: {
    focus: {
      mounted: function (el, binding) {
        if (binding.value) {
          el.focus()
        }
      }
    }
  },
  props: inputProps,
  emits: ['update:value', 'focus', 'blur', 'change', 'keydown'],
  setup(props, ctx) {
    const sizeCls = computed(() => `devui-input-${props.size}`);
    const showPwdIcon = ref(false)
    const inputType = ref<InputType>('text')
    const inputCls = computed(() => {
      return {
        error: props.error,
        [props.cssClass]: true,
        [sizeCls.value]: props.size !== ''
      }
    })
    const showPreviewIcon = computed(() => inputType.value === 'password')
    watch(() => props.showPassword, flg => {
      inputType.value = flg ? 'password' : 'text'
    }, { immediate: true })

    watch(() => props.value, value => {
      (value && value.length > 0 && showPreviewIcon.value) ? showPwdIcon.value = true : showPwdIcon.value = false
    })

    const onInput = ($event: Event) => {
      ctx.emit('update:value', ($event.target as HTMLInputElement).value);
    },
      onFocus = () => {
        ctx.emit('focus');
      },
      onBlur = () => {
        ctx.emit('blur');
      },
      onChange = ($event: Event) => {
        ctx.emit('change', ($event.target as HTMLInputElement).value);
      },
      onKeydown = ($event: KeyboardEvent) => {
        ctx.emit('keydown', $event);
      },
      onChangeInputType = () => {
        inputType.value = inputType.value === 'password' ? 'text' : 'password'
      }
    return {
      inputCls,
      inputType,
      showPreviewIcon,
      showPwdIcon,
      onInput,
      onFocus,
      onBlur,
      onChange,
      onKeydown,
      onChangeInputType
    };
  },
  render () {
    const {
      value,
      showPreviewIcon,
      showPwdIcon,
      inputCls,
      inputType,
      maxLength,
      autoFocus,
      placeholder,
      disabled,
      onInput,
      onFocus,
      onBlur,
      onChange,
      onKeydown,
      onChangeInputType,
    } = this;
    return (
      <div class="devui-input__wrap">
        <input
          v-focus={autoFocus}
          {...{dinput: true}}
          value={value}
          disabled={disabled}
          type={inputType}
          maxlength={maxLength}
          placeholder={placeholder}
          class={inputCls}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onKeydown={onKeydown} 
        />
        {
          showPwdIcon && <div class="devui-input__preview" onClick={onChangeInputType}>
          { showPreviewIcon
            ? <d-icon name="preview" size="12px" key={1}/>
            : <d-icon name="preview-forbidden" size="12px" key={2} />
          }
        </div>}
      </div>
    );
  }
});
