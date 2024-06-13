export declare namespace M_Board {
    export interface I_BoardList {
      prev_notice_no: number;
      next_notice_no: number;
      attach_info: Record<string, { file_name: string; size: number }>; // 첨부파일
      comment_count: number; // 코멘트 개수
      content: string;
      hit_count: number; // 조회수
      is_enable: number;
      is_top: number;
      notice_no: number;
      reg_epoch: number;
      rnum: number;
      title: string;
      top: number; // 상단 고정 여부
      type: number; // 게시물 구분 (공지, 자료, 기타)
      user_id: string;
      user_name: string;
      user_no: number;
    }
  
    export interface I_filter {
      pagination: { offset: number; limit: number };
      sort: { orderKey: string; order: string };
      search?: string; // input- search
      type: number; // 검색 탭
      user_info?: string; // filter - 작성자
      dateFilter: { start: number; end: number }; // filter - 기간
      keyword_type?: { title: number; contents: number }; // filter - 검색어 타입
      keyword: string; // filter - 검색어
      config: 'wholePeriod' | 'week' | 'month' | 'threeMonths' | 'sixMonths' | 'year' | 'selectPeriod';
    }
  }
  