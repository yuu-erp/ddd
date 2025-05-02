export interface EmitterPort {
  /**
   * Đăng ký lắng nghe một sự kiện
   * @param event Tên sự kiện
   * @param listener Hàm callback được gọi khi event xảy ra
   */
  on(event: string, listener: (...args: any[]) => void): void

  /**
   * Gửi một sự kiện với các tham số
   * @param event Tên sự kiện
   * @param args Dữ liệu gửi kèm
   */
  emit(event: string, ...args: any[]): void

  /**
   * Gửi sự kiện bất đồng bộ, cho phép chờ tất cả listener thực thi xong
   * @param event Tên sự kiện
   * @param args Dữ liệu gửi kèm
   */
  emitAsync(event: string, ...args: any[]): Promise<void>

  /**
   * Gỡ bỏ listener khỏi một event cụ thể
   * @param event Tên sự kiện
   * @param listener Listener cần gỡ bỏ
   */
  removeEventListener(event: string, listener: (...args: any[]) => void): void

  /**
   * Gỡ bỏ toàn bộ listeners cho một event hoặc tất cả các event
   * @param event Nếu không truyền sẽ xóa tất cả
   */
  removeAllEventListeners(event?: string): void
}
